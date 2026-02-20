import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { InstructionalContext } from "@/context/InstructionalContext";
import TicketInbox from "@/components/helpdesk/TicketInbox";

// ── Default context for wrapping ──
const defaultContext = {
    completedScenarios: new Set(),
    completedModules: new Set(),
    globalScore: 0,
    scores: {},
    resetAllProgress: vi.fn(),
    acceptTicket: vi.fn(),
};

function renderInbox(overrides = {}) {
    const ctx = { ...defaultContext, ...overrides };
    return render(
        <InstructionalContext.Provider value={ctx}>
            <TicketInbox />
        </InstructionalContext.Provider>
    );
}

describe("TicketInbox", () => {
    it("renders module headers from curriculum", () => {
        renderInbox();
        // Module 3 (Credential Configuration) has an authored scenario
        expect(screen.getByText("Credential Configuration")).toBeInTheDocument();
    });

    it("renders ticket cards for authored scenarios", () => {
        renderInbox();
        // scenario_idm_credentials has ticketSubject
        expect(screen.getByText("Change student email format to first initial + last name")).toBeInTheDocument();
    });

    it("renders Module 1 scenarios now that they are authored", () => {
        renderInbox();
        // Module 1 has two authored scenarios — its header should appear
        expect(screen.getByText("IDM Overview & Navigation")).toBeInTheDocument();
        // Both Module 1 ticket subjects should render
        expect(screen.getByText("Where do I find the Google sync settings?")).toBeInTheDocument();
        expect(screen.getByText("I need to check our recent sync logs")).toBeInTheDocument();
    });

    it("un-authored modules auto-satisfy prerequisites (Fix 1)", () => {
        // Module 3 has prerequisites: mod_provisioning_basics → mod_overview
        // Module 1 is now authored (2 scenarios), but Module 2 still has zero authored scenarios → auto-satisfied
        // Module 3 ticket should NOT be locked since Module 2 auto-satisfies
        renderInbox();
        const ticket = screen.getByText("Change student email format to first initial + last name");
        expect(ticket).toBeInTheDocument();
        // Module 3 ticket should be among the "Open" tickets (not locked)
        const openLabels = screen.getAllByText("Open");
        expect(openLabels.length).toBeGreaterThanOrEqual(1);
        expect(screen.queryByText("Complete previous modules to unlock")).not.toBeInTheDocument();
    });

    it("completed ticket shows score", () => {
        renderInbox({
            completedScenarios: new Set(["scenario_idm_credentials"]),
            scores: {
                scenario_idm_credentials: { correct: 3, total: 4, timeMs: 120000, startTime: 0 }
            },
        });
        expect(screen.getByText(/3\/4/)).toBeInTheDocument();
        expect(screen.getByText(/2m 00s/)).toBeInTheDocument();
    });

    it("displays score badge with globalScore", () => {
        renderInbox({ globalScore: 5 });
        expect(screen.getByText(/⭐ 5/)).toBeInTheDocument();
    });

    it("clicking open ticket shows mode picker", () => {
        renderInbox();
        const ticket = screen.getByText("Change student email format to first initial + last name");
        fireEvent.click(ticket.closest("[role='button']"));
        expect(screen.getByText("How would you like to proceed?")).toBeInTheDocument();
        expect(screen.getByText("Guided")).toBeInTheDocument();
        expect(screen.getByText("Unguided")).toBeInTheDocument();
    });

    it("mode picker calls acceptTicket with correct args", () => {
        const mockAccept = vi.fn();
        renderInbox({ acceptTicket: mockAccept });

        const ticket = screen.getByText("Change student email format to first initial + last name");
        fireEvent.click(ticket.closest("[role='button']"));

        // Click "Guided"
        fireEvent.click(screen.getByText("Guided"));
        expect(mockAccept).toHaveBeenCalledWith("scenario_idm_credentials", true);
    });
});
