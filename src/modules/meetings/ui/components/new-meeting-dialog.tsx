import { useRouter } from 'next/navigation';
import { ResponsiveDialog } from '@/components/responsive-dialog';
import { MeetingForm } from './meeting-form';

interface NewMeetingDialogProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
};

export const NewMeetingDialog = ({ isOpen, onOpenChange }: NewMeetingDialogProps) => {
    const router = useRouter();
    return (
        <ResponsiveDialog
            title="New Meeting"
            description="Create a new meeting"
            open={isOpen}
            onOpenChange={onOpenChange} // prop forwarding
        >
            <MeetingForm
                onSuccess={(id) => {
                    onOpenChange(false);
                    router.push(`/meetings/${id}`);
                }}
                onCancel={() => onOpenChange(false)}
            />
        </ResponsiveDialog>
    );
};