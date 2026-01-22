"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MeetingsView, MeetingsViewError, MeetingsViewLoading } from "@/modules/meetings/ui/views/meetings-view";
import { MeetingsListHeader } from "@/modules/meetings/ui/components/meeting-list-header";

const page = () => {
    return (
        <>
            <MeetingsListHeader />
            <Suspense fallback={<MeetingsViewLoading />}>
                <ErrorBoundary fallback={<MeetingsViewError />}>
                    <MeetingsView />
                </ErrorBoundary>
            </Suspense>
        </>
    );
};

export default page;