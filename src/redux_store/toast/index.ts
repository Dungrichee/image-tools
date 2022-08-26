import toast from 'react-hot-toast';

export const toastMessage = {
    success: (message: string) => toast.success(message),
    error: (message: string) => toast.error(message || 'Lỗi hệ thống'),
};
