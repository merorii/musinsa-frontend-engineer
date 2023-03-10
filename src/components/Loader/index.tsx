import * as S from "./style";

interface LoaderPropsType {
  width?: number;
  height?: number;
}

export const Loader = ({ width, height }: LoaderPropsType) => {
  return (
    <S.Spinner width={width} height={height}>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </S.Spinner>
  );
};
