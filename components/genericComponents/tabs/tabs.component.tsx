import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useParams } from "next/navigation";

const Tabs = ({ children, className, defaultTab }) => {
  const [active, setActive] = useState("");
  const router = useRouter();
  const { tab } = router.query;
  const params = useParams();

  useEffect(() => updateActiveTab(), [tab]);

  const updateActiveTab = useCallback(() => {
    const selectedTab = tab ?? defaultTab;
    if (!selectedTab) return;

    const index = children.findIndex((child) => child.key == selectedTab);

    if (index < 0) return;
    setActive(children[index].key);
  }, [tab]);

  const handleClick = (cb = () => {}) => {
    cb && cb();
  };

  const getContent = useMemo(() => {
    const index = children.findIndex((child) => child.key == active);
    if (index < 0) return <></>;
    return children[index];
  }, [active]);

  return (
    <div className={className}>
      <div className="flex bg-white">
        {children.map((child, index) => (
          <Link
            href={`${params?.companyHandle}?tab=${child.key}`}
            className={`${
              child.key === active
                ? " border-blue-800 font-bold"
                : "border-white"
            } border-b-2 w-full`}
            key={`tab-${index}`}
            onClick={(e) => handleClick(child.props.onClick)}
          >
            <div className=" shadow h-14 flex justify-center items-center">
              {child.props.title}
            </div>
          </Link>
        ))}
      </div>
      <div>{getContent}</div>
    </div>
  );
};

export default Tabs;
