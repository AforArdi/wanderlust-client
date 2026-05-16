"use client";
import { DeleteBooking } from "@/lib/actions";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { IoTrashBin } from "react-icons/io5";

const CancelAlert = ({bookingId}) => {
    const handleCancel=async()=>{
        await DeleteBooking(bookingId);
        redirect('/bookings');
    }

    return (
        <AlertDialog>
            <Button variant="outline" className={'text-red-500 rounded-none'}><IoTrashBin></IoTrashBin> Cancel</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel Booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Footer>
                            <Button className={'rounded-none'} onClick={handleCancel} variant="danger">
                                Cancel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}

export default CancelAlert;