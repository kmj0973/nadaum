import Link from "next/link";
import { datasType } from "../_types/types";

export default function FacilitiesCard({
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
            <Link
              href={data.FT_HOMEPAGE || ""}
              className="inline-block ml-4 mt-2 font-semibold"
            >
              {data.FT_TITLE}
            </Link>
            <div className="px-7 mt-2 mb-4 ">
              <div className="text-[13px] font-medium">
                평일: {data.FT_WD_TIME}
              </div>
              <div className="text-[13px] font-medium">
                주말: {data.FT_WE_TIME}
              </div>
              <div className="text-[13px] font-medium">
                장소: {data.FT_ADDR} {data.FT_ADDR_DETAIL}
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="bg-[#18B491] rounded-xl text-white text-[12px] font-light px-2 py-1">
                  <div className="font-semibold">이용료</div>
                  {data.FT_MONEY == "" ? "무료" : data.FT_MONEY}
                </div>
                <div className="bg-[#18B491] rounded-xl text-white text-[12px] font-light px-2 py-1">
                  <div className="font-semibold">전화문의</div>
                  {data.FT_PHONE}
                </div>
                <div className="bg-[#18B491] rounded-xl text-white text-[12px] font-light px-2 py-1">
                  <div className="font-semibold">주차장</div>
                  {data.FT_PARK}
                </div>
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
