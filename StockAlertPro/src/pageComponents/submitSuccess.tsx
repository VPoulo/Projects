import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export function SubscribeSuccess({ onClose }: { onClose: () => void }) {
  const handleCloseWithReload = () => {
    onClose();
    window.location.reload();
  };
  return (
    <Dialog
      aria-labelledby="responsive-dialog-title"
      open={true}
      onClose={handleCloseWithReload}
    >
      <DialogTitle id="responsive-dialog-title">Subscribe Success!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <p>Your notification has been set! </p>
          <p>You may click anywhere to finish your submission.</p>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export function UnsubscribeSuccess({ onClose }: { onClose: () => void }) {
  const handleCloseWithReload = () => {
    onClose();
    window.location.reload();
  };
  return (
    <Dialog
      aria-labelledby="responsive-dialog-title"
      open={true}
      onClose={handleCloseWithReload}
    >
      <DialogTitle id="responsive-dialog-title">
        Unsubscribe Success!
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <p>You have been unsubscribed from that stock!</p>
          <p>You may click anywhere to finish your submission.</p>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
