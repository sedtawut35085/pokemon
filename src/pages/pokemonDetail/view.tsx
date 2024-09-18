import styled from "styled-components";
import { typeBgColorClasses, typeTextColorClasses } from "../pokemon/type";
import ViewModel from "../pokemonDetail/viewModel";

interface ITypeBoxProps {
  type: string;
}

const View = () => {
  const { data, isRefetching } = ViewModel();
  return (
    !isRefetching && (
      <div>
        <div className="flex flex-col items-center">
          <div className="text-[60px] text-gray-500">
            {data?.name.toUpperCase()}
          </div>
          <div className="flex flex-row gap-2">
            {data?.types.map((value, index) => {
              return (
                <BoxTypeDecoration type={value.type.name}>
                  <div
                    key={index}
                    className="type-color border border-black-100 rounded-md px-1 text-[16px]"
                  >
                    {value.type.name.charAt(0).toUpperCase() +
                      value.type.name.slice(1)}
                  </div>
                </BoxTypeDecoration>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col h-screen w-screen pt-16">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {/* left */}
            <div className="flex flex-col items-center bg-green-200">
              <div className="bg-black text-white ">{data?.name}</div>
              <div className="bg-black text-white ">{data?.name}</div>
              <div className="bg-black text-white ">{data?.name}</div>
            </div>
            {/* main */}
            <div className="flex flex-col bg-black items-center">
              <div className="h-[300px] w-[300px]">
                <img
                  className="h-full w-full"
                  style={{ width: "100%", height: "auto" }}
                  src={data?.sprites.front_default}
                  alt={data?.name}
                />
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col bg-black items-center">
              <div className="bg-black text-white text-[48px]">
                {data?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const BoxTypeDecoration = styled.div<ITypeBoxProps>`
  .type-color {
    background-color: ${(props) =>
      typeBgColorClasses[props.type as keyof typeof typeBgColorClasses] ||
      "white"};
    color: ${(props) =>
      typeTextColorClasses[props.type as keyof typeof typeTextColorClasses] ||
      "black"};
  }
`;

export default View;
