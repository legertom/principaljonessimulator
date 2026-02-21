"use client";

import { useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import GoogleProvisioningWizard from "@/components/pages/GoogleProvisioningWizard";
import { useInstructional } from "@/context/InstructionalContext";
import {
    buildDashboardRoute,
    buildProvisioningRoute,
    getRouteParamValue,
    parseProvisioningStep,
} from "@/lib/routing";

export default function ProvisioningWizardRoute() {
    const params = useParams();
    const router = useRouter();
    const { setIdmSetupComplete } = useInstructional();

    const rawStep = getRouteParamValue(params?.step);
    const normalizedStep = useMemo(() => parseProvisioningStep(rawStep), [rawStep]);

    useEffect(() => {
        if (rawStep.toLowerCase() !== normalizedStep) {
            router.replace(buildProvisioningRoute(normalizedStep));
        }
    }, [normalizedStep, rawStep, router]);

    return (
        <GoogleProvisioningWizard
            currentStep={normalizedStep}
            onStepChange={(nextStep) => router.push(buildProvisioningRoute(nextStep))}
            onExit={() => router.push(buildDashboardRoute("idm"))}
            onProvisionComplete={() => setIdmSetupComplete(true)}
        />
    );
}
