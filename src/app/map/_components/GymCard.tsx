import { datasType } from "../_types/types";

export default function GymCard({
  filteredDatas,
}: {
  filteredDatas: datasType[];
}) {
  return (
    <div className="w-full flex flex-col items-center overflow-auto gap-5 flex-1">
      {filteredDatas.length != 0 ? (
        filteredDatas.map((data, index) => (
          <div
            key={index}
            className="bg-white w-[90%] h-[150px] rounded-md shrink-0 overflow-auto"
          >
            <div className="inline-block ml-4 mt-2 font-semibold">
              {data.BPLCNM}
            </div>
            <div className="px-7 mt-5 mb-4 ">
              <div className="text-[13px] font-medium">
                영업: {data.DTLSTATENM}
              </div>
              <div className="text-[13px] font-medium">
                장소: {data.RDNWHLADDR}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex-1 flex justify-center items-center">
          검색 결과가 없습니다
        </div>
      )}
    </div>
  );
}
