// Component Title and texblocks
const TextBlock = ({ heading, body, subhead, largestHead }: TextBlockProps) => {
  return (
    <div className={`flex flex-col gap-3 `}>
      <div className={`flex flex-col`}>
        {largestHead ? (
          <>
            <h1
              className={`tracking-[-1.5px] font-bold text-4xl leading-[34px]`}
            >
              {heading}
            </h1>
            <p className={`text-sm`}>{subhead}</p>
          </>
        ) : (
          <div>
            <h3 className={`font-bold text-[30px] leading-[24px]`}>
              {heading}
            </h3>
            <p className={`text-sm`}>{subhead}</p>
          </div>
        )}
      </div>
      <p className={"text-md leading-[24px] text-kiwi-subheading "}>{body}</p>
    </div>
  );
};

const TitleHead = ({ titleHead }: TitleBlockProps) => {
  const { h01, h02, h03, content } = titleHead;

  return h01 ? (
    <h1 className={`text-4xl font-medium`}>{content}</h1>
  ) : h02 ? (
    <h2 className={`text-2xl font-medium`}>{content}</h2>
  ) : h03 ? (
    <h3 className={`text-xl font-medium  mb-2`}>{content}</h3>
  ) : (
    <h4 className={`text-lg font-medium tracking-wide`}>{content}</h4>
  );
};

type TextBlockProps = {
  heading: string;
  body: string;
  subhead?: string;
  children?: React.ReactNode;
  largestHead: boolean;
};
type TitleBlockProps = {
  titleHead: {
    h01?: boolean;
    h02?: boolean;
    h03?: boolean;
    h04?: boolean;
    content: string;
  };
};

export { TextBlock, TitleHead };
