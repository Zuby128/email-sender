"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Login from "@/components/common/Login";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { children } = props;

  const [isValid, setIsValid] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.localStorage.getItem(
        process.env.NEXT_PUBLIC_LOCALHOST_USER as string
      )
    ) {
      const isUser = window.localStorage.getItem(
        process.env.NEXT_PUBLIC_LOCALHOST_USER as string
      );

      JSON.parse(isUser!) ? setIsValid(true) : router.push("/login");
    } else {
      setIsValid(false);
      router.push("/login");
    }
  }, [typeof window, pathname]);

  if (!isValid) {
    return (
      <>
        {pathname !== "/login" ? (
          <div className="flex justify-center h-screen w-100">
            <Skeleton />
          </div>
        ) : (
          <Login />
        )}
      </>
    );
  }

  return (
    <>
      {/* <Header /> */}
      <div className="container mx-auto px-2 md:px-8 lg:px-20">{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
