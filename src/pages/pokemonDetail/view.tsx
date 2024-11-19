import styled from "styled-components";
import { typeBgColorClasses, typeTextColorClasses } from "../pokemon/type";
import ViewModel from "../pokemonDetail/viewModel";

interface ITypeBoxProps {
  type: string;
}

interface IProgressProps {
  percent: number;
}

const View = () => {
  const { data, isRefetching } = ViewModel();

  return (
    !isRefetching && (
      <div>
        {/* header */}
        <div className="flex flex-col items-center">
          <div className="text-[60px] text-gray-500">
            {data?.name.toUpperCase()}
          </div>
          <div className="flex flex-row gap-2">
            {data?.types.map((value, index) => {
              return (
                <div key={index}>
                  <BoxTypeDecoration type={value.type.name}>
                    <div className="type-color border border-black-100 rounded-md px-1 text-[16px]">
                      {value.type.name.charAt(0).toUpperCase() +
                        value.type.name.slice(1)}
                    </div>
                  </BoxTypeDecoration>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col h-screen w-screen pt-16">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {/* left */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-end gap-6">
                <div className="transform skew-y-12 text-black mr-2">ID</div>
                <div className="transform skew-y-12 text-black mr-2">
                  Height
                </div>
                <div className="transform skew-y-6 text-black mr-2">Weight</div>
                <div className="transform skew-y-1 text-black mr-2 mt-2">
                  Abilities
                </div>
                <div className="transform -skew-y-4 text-black mr-2 mt-2">
                  Type
                </div>
                <div className="transform -skew-y-6 text-black mr-2 mt-2">
                  Forms
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-6">
                <div className="transform skew-y-12">
                  <div className="text-gray-500 ">#{data?.id}</div>
                </div>
                <div className="transform skew-y-12">
                  <div className="text-gray-500 ">{data?.height}</div>
                </div>
                <div className="transform skew-y-6">
                  <div className="text-gray-500 ">{data?.weight}</div>
                </div>
                <div className="transform skew-y-1">
                  <div className="flex flex-row gap-1 ">
                    {data?.abilities.map((value, index) => {
                      return (
                        <div key={index}>
                          <BoxTypeDecoration type={data.types[0].type.name}>
                            <div className="type-color border border-black-100 rounded-md px-1 text-[16px]">
                              {value.ability.name}
                            </div>
                          </BoxTypeDecoration>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="transform -skew-y-2">
                  <div className="flex flex-row gap-1 ">
                    {data?.types.map((value, index) => {
                      return (
                        <div key={index}>
                          <BoxTypeDecoration type={value.type.name}>
                            <div className="type-color border border-black-100 rounded-md px-1 text-[16px]">
                              {value.type.name}
                            </div>
                          </BoxTypeDecoration>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="transform -skew-y-6">
                  <div className="flex flex-row gap-1 ">
                    {data?.forms.map((value, index) => {
                      return (
                        <div key={index}>
                          <BoxTypeDecoration type={data.types[0].type.name}>
                            <div className="type-color border border-black-100 rounded-md px-1 text-[16px]">
                              {value.name}
                            </div>
                          </BoxTypeDecoration>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* main */}
            <div className="flex flex-col items-center">
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
            <div className="flex flex-col justify-center w-full">
              <div className="flex flex-row gap-10 justify-center">
                <div className="border rounded-full px-2">Base</div>
                <div className="border rounded-full px-2">Min</div>
                <div className="border rounded-full px-2">Max</div>
              </div>
              <ProgressDecoration
                percent={
                  data?.stats.find((stats) => stats.stat.name === "hp")
                    ?.base_stat || 0
                }
              >
                <div className="flex flex-row m-4">
                  <div className="text-[16px] mr-2 font-medium">HP</div>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <span className="text-[16px] p-2 text-white font-light">{data?.stats.find((stats) => stats.stat.name === "hp")
                    ?.base_stat || 0}</span>
                    </div>
                  </div>
                </div>
              </ProgressDecoration>
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

const ProgressDecoration = styled.div<IProgressProps>`
  .progress-container {
    height: 20;
    width: 100%;
    background-color: #e0e0de;
    border-radius: 50px;
  }

  .progress-bar {
    height: 100%;
    width: ${(props) => props.percent}%;
    background-color: #4d8f5f;
    border-radius: inherit;
    text-align: right;
  }
`;

export default View;
