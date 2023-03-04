
interface ModalState {
    isModalOpen: boolean,
    content: string
}

export const initialModalOptions: ModalState = {
    isModalOpen: false,
    content: ''
}