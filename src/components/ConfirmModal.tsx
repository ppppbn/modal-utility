import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface ConfirmModalProps {
	open: boolean;
	title: string;
	description?: string;
	okText?: string;
	cancelText?: string;
	onClose: (event: Event, reason?: string) => void;
	onConfirm: (response: boolean) => void;
}

export default function ConfirmModal(props: ConfirmModalProps) {
	const { open, title, description, okText = 'Agree', cancelText = 'Disagree', onConfirm, onClose } = props;

  return (
    <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
			<DialogTitle id="alert-dialog-title">
				{title}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{description}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => onConfirm(false)}>{cancelText}</Button>
				<Button onClick={() => onConfirm(true)}>{okText}</Button>
    	</DialogActions>
    </Dialog>
  );
}