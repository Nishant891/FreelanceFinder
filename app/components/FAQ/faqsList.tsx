"use client";
import { FaqDatas } from "../../lib/data";
import { useState } from "react";

interface faqData {
  id: string;
  question: string;
  answer: string;
}

const ListFaqs = () => {
  const [readIds, setReadId] = useState<string[]>([]);
  const addReadId = (id: string) => {
    setReadId((prevIds) => [...prevIds, id]);
  };
  const removeReadId = (id: string) => {
    const newReadIds = readIds.filter((readId) => {
      return !(readId == id);
    });
    setReadId(newReadIds);
  };
  return (
    <>
      {FaqDatas.map((FaqData) => {
        return (
          <li
            key={FaqData.id}
            className="w-full border-b border-b-gray-300 pb-6"
          >
            <div className="w-full flex justify-between items-center mt-8 lg:gap-[6rem] gap-[2rem]">
              <p className="manrope font-[600] text-[20px] leading-[28px]">
                {FaqData.question}
              </p>
              {readIds.includes(FaqData.id) ? (
                <button
                  onClick={() => {
                    removeReadId(FaqData.id);
                  }}
                >
                  <span className="text-3xl">-</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    addReadId(FaqData.id);
                  }}
                >
                  <span className="text-3xl">+</span>
                </button>
              )}
            </div>
            {readIds.includes(FaqData.id) ? (
              <div className="w-full mt-6">
                <p className="manrope font-[400] text-[15px] text-[#617275] leading-[24px]">
                  {FaqData.answer}
                </p>
              </div>
            ) : null}
          </li>
        );
      })}
    </>
  );
};

export default ListFaqs;
