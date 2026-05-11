"use client";
import { DeleteAction } from "@/lib/actions";
import { AlertDialog, Button } from "@heroui/react";
import { MdDeleteOutline } from "react-icons/md";

const AlertModal = ({destination, params}) => {
    const { destinationName, _id } = destination;

    const handleDelete=async()=>{
        await DeleteAction(_id);
    }

    return (
        <AlertDialog>
            <Button variant="ghost" className={'rounded-none flex items-center gap-2 text-red-500'}><MdDeleteOutline></MdDeleteOutline> Delete</Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}

export default AlertModal;