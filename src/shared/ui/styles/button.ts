import type { UiButtonProps } from "../kit/ui-button.vue";

export const ButtonStyles = {
  variants: {
    filled: {
      primary:
        "text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700",
      secondary: "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700",
    },
    ghost: {
      primary: "text-neutral-900 hover:bg-violet-50 active:bg-violet-100",
      secondary: "text-neutral-900 hover:bg-blue-50 active:bg-blue-100",
    },
  },
  sizes: {
    sm: "gap-[6px] text-[14px] py-1 px-2 rounded-[8px] [&>svg]:w-3",
    md: "gap-[8px] text-[18px] py-2 px-5 rounded-[12px] [&>svg]:w-5",
    lg: "gap-[10px] text-[18px] py-4 px-5 rounded-[16px] min-w-[120px] [&>svg]:w-5",
  },
};

export function getButtonClassNames({
  variant = "filled",
  size = "md",
  color = "primary",
}: Omit<UiButtonProps, "as">) {
  return [
    [
      "inline-flex outline-blue-500 cursor-pointer transition",
      ButtonStyles.variants[variant][color],
      ButtonStyles.sizes[size],
    ],
  ];
}
