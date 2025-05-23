import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Badge } from "@/components/ui/badge";
import { getDeviconClassname } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}

const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
  remove,
  isButton,
  handleRemove,
}: Props) => {
  const iconClass = getDeviconClassname(name);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  const Content = (
    <>
      <Badge
        className={
          "background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase flex flex-row gap-2"
        }
      >
        <div className={"flex-center space-x-2"}>
          <i className={`${iconClass} text-sm`}></i>
          <span>{name}</span>
        </div>
        {remove && (
          <Image
            src={"/icons/close.svg"}
            alt={"close icon"}
            width={12}
            height={12}
            className={"cursor-pointer object-contain invert-0 dark:invert"}
            onClick={handleRemove}
          />
        )}
      </Badge>
      {showCount && (
        <p className={"small-medium text-dark500_light700"}>{questions}</p>
      )}
    </>
  );

  if (compact) {
    return isButton ? (
      <button className={"flex justify-between gap-2"} onClick={handleClick}>
        {Content}
      </button>
    ) : (
      <Link href={ROUTES.TAGS(_id)} className={"flex justify-between gap-2"}>
        {Content}
      </Link>
    );
  }
};

export default TagCard;
