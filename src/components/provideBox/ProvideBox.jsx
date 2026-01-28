import React from "react";
import S from "./style";
import BaseButton from "../button/BaseButton";

const ProvideBox = () => {
  return (
    <S.ProvideBox>
      <S.ProvideBoxLink to="/provide/detail">
        <S.ProvideBoxButtonWrapper>
          <BaseButton
            border="primary"
            borderWidth="medium"
            size="medium"
            shape="pill"
            color="white"
            padding="small"
            backgroundColor="primary"
            font="bttxt"
          >
            생활정보
          </BaseButton>
        </S.ProvideBoxButtonWrapper>
        <S.ProvideBoxImageWrapper>
          <S.ProvideBoxImage
            src={`${process.env.PUBLIC_URL}/assets/images/provide-default.png`}
            alt="provide box"
          />
        </S.ProvideBoxImageWrapper>
        <S.ProvideBoxContent>
          <S.ProvideBoxTitle>
            <S.ProvideBoxTitleSubtext>생활정보</S.ProvideBoxTitleSubtext>
            <S.ProvideBoxTitleText>
              2025 청년 자취정보 소식
            </S.ProvideBoxTitleText>
          </S.ProvideBoxTitle>
          <S.ProvideBoxContentBottom>
            <S.ProvideBoxDate>2025. 10. 22</S.ProvideBoxDate>
            <S.ProvideBoxMore>
              <svg
                width="5"
                height="18"
                viewBox="0 0 5 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.14719 12.3437C1.72017 12.3437 1.31064 12.5134 1.00869 12.8153C0.706742 13.1173 0.537109 13.5268 0.537109 13.9538C0.537109 14.3808 0.706742 14.7904 1.00869 15.0923C1.31064 15.3943 1.72017 15.5639 2.14719 15.5639C2.57421 15.5639 2.98374 15.3943 3.28569 15.0923C3.58764 14.7904 3.75727 14.3808 3.75727 13.9538C3.75727 13.5268 3.58764 13.1173 3.28569 12.8153C2.98374 12.5134 2.57421 12.3437 2.14719 12.3437ZM2.14719 6.9768C1.72017 6.9768 1.31064 7.14644 1.00869 7.44838C0.706742 7.75033 0.537109 8.15986 0.537109 8.58688C0.537109 9.0139 0.706742 9.42344 1.00869 9.72538C1.31064 10.0273 1.72017 10.197 2.14719 10.197C2.57421 10.197 2.98374 10.0273 3.28569 9.72538C3.58764 9.42344 3.75727 9.0139 3.75727 8.58688C3.75727 8.15986 3.58764 7.75033 3.28569 7.44838C2.98374 7.14644 2.57421 6.9768 2.14719 6.9768ZM3.75727 3.21995C3.75727 3.00851 3.71563 2.79914 3.63471 2.60379C3.5538 2.40845 3.4352 2.23096 3.28569 2.08145C3.13618 1.93194 2.95869 1.81334 2.76334 1.73242C2.568 1.65151 2.35863 1.60986 2.14719 1.60986C1.93575 1.60986 1.72638 1.65151 1.53104 1.73242C1.3357 1.81334 1.1582 1.93194 1.00869 2.08145C0.859181 2.23096 0.740584 2.40845 0.65967 2.60379C0.578755 2.79914 0.537109 3.00851 0.537109 3.21995C0.537109 3.43138 0.578755 3.64075 0.65967 3.8361C0.740584 4.03144 0.859181 4.20894 1.00869 4.35844C1.1582 4.50795 1.3357 4.62655 1.53104 4.70747C1.72638 4.78838 1.93575 4.83003 2.14719 4.83003C2.35863 4.83003 2.568 4.78838 2.76334 4.70747C2.95869 4.62655 3.13618 4.50795 3.28569 4.35844C3.4352 4.20894 3.5538 4.03144 3.63471 3.8361C3.71563 3.64075 3.75727 3.43138 3.75727 3.21995Z"
                  fill="#B5B5B5"
                />
              </svg>
            </S.ProvideBoxMore>
          </S.ProvideBoxContentBottom>
        </S.ProvideBoxContent>
      </S.ProvideBoxLink>
    </S.ProvideBox>
  );
};

export default ProvideBox;
