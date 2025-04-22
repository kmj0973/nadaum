type Props = {
  role: string;
  message: string;
};

export default function Chat({ role, message }: Props) {
  return (
    <>
      {role==='user' ? (
        <div className=" font-medium ml-10 flex justify-end">
          <div className="bg-[#F2F2F2] p-2 px-4 rounded-2xl">{message}</div>
        </div>
      ) : (
        <div className="font-medium mr-10 ">{message}</div>
      )}
    </>
  );
}
