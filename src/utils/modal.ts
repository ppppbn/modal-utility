import React from 'react';
import { render, unmount } from 'rc-util/lib/React/render';
import ConfirmModal from 'components/ConfirmModal';

interface ModalConfirmProps {
  /* To add more props support in the future */
  title: string;
  description?: string;
  okText?: string;
  cancelText?: string;
  onClose: (event: Event, reason?: string) => void;
  onConfirm: (response: boolean) => void;
  /* set forceOverride to true to unmount the existing modal and display the new one immediately */
  forceOverride?: boolean;
}

let currentModal = null as any;
let container = document.createDocumentFragment();

const destroy = async () => {
  await unmount(container);
  currentModal = null;
}

export const confirm = async (config: ModalConfirmProps) => {  
  const {
    title,
    description,
    okText,
    cancelText,
    onClose,
    onConfirm,
    forceOverride = false,
  } = config;
  
  if (currentModal && !forceOverride) {
    return;
  }
  if (currentModal && forceOverride) {
    await destroy();
  }

  currentModal = React.createElement(ConfirmModal, {
    open: true,
    title,
    description,
    okText,
    cancelText,
    onClose: (event: Event, reason?: string) => {
      destroy();
      onClose(event, reason);
    },
    onConfirm: (response) => {
      destroy();
      onConfirm(response);
    },
  });
  render(currentModal, container);
};