type Props = {
  role: string;
  message: string;
};

export default function Comment({ role, message }: Props) {
  return (
    <>
      {role === "user" ? (
        <div className=" font-medium ml-10 flex justify-end mr-1">
          <p className="bg-[#F2F2F2] p-2 px-4 rounded-2xl whitespace-pre-line">
            {message}
          </p>
        </div>
      ) : (
        <p className="font-medium mr-10 whitespace-pre-line ml-1">{message}</p>
      )}
    </>
  );
}
