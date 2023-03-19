import { ButtonIcon } from "./ButtonIcon";

import { ButtonProps } from "./Button.types";
import * as S from "./Button.styles";

export const Button = ({
  children,
  icon,
  iconPosition = "start",
  size = "md",
  loading,
  ...rest
}: ButtonProps) => {
  const contentProps = { children, icon, iconPosition, loading };

  return (
    <S.Button {...rest} size={size}>
      <ButtonContent {...contentProps} />
    </S.Button>
  );
};

const ButtonContent = ({
  children,
  icon,
  iconPosition,
  loading,
}: Pick<ButtonProps, "children" | "icon" | "iconPosition" | "loading">) => {
  return loading ? (
    <>Loading</>
  ) : (
    <>
      {icon && iconPosition === "start" && <ButtonIcon>{icon}</ButtonIcon>}
      {children}
      {icon && iconPosition === "end" && { icon }}
    </>
  );
};
