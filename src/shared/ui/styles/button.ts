export const ButtonStyles = {
    variants: {
        filled: {
            primary: "text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700",
            secondary: "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700",
        },
        ghost: {
            primary: "text-neutral text-violet-500 hover:text-violet-600 active:text-violet-700",
            secondary: "text-neutral text-gray-500 hover:text-gray-600 active:text-gray-700",
        },
    },
    sizes: {
        sm: "text-[14px] py-1 px-2 rounded-[8px]",
        md: "text-[18px] py-2 px-5 rounded-[12px]",
        lg: "text-[18px] py-4 px-5 rounded-[16px] min-w-[120px]",
    }
}