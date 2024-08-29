import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Modal from '../../components/Modal/Modal';
import '@testing-library/jest-dom'; 

// Mocking the styles module
vi.mock('./modal.module.scss', () => ({
  modal: 'modal',
  modalContent: 'modalContent',
  createMessage: 'createMessage',
}));

describe('Modal Component', () => {
  it('renders the modal content', () => {
    const testMessage = 'This is a test message';
    render(
      <Modal>
        {testMessage}
      </Modal>
    );
    
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it('applies the correct styles to modal elements', () => {
    render(
      <Modal>
        Test
      </Modal>
    );

    const modalElement = screen.getByText('Test').closest('div');
    expect(modalElement).toHaveClass(/_createMessage_/);
    expect(modalElement?.parentElement).toHaveClass(/_modalContent_/);
    expect(modalElement?.parentElement?.parentElement).toHaveClass(/_modal_/);
  });

  it('sets and cleans up body overflow style', () => {
    // Render the modal
    const { unmount } = render(
      <Modal>
        Test
      </Modal>
    );

    // Check that the body overflow is set to hidden
    expect(document.body.style.overflow).toBe('hidden');

    // Unmount the modal component
    unmount();

    // Check that the body overflow is reset to auto
    expect(document.body.style.overflow).toBe('auto');
  });
});
