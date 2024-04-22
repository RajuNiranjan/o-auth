import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="flex gap-5 w-full h-screen p-16  bg-[#888]">
        <div className="basis-1/4">
          <LeftMenu />
        </div>
        <div className="basis-3/4">
          <Component {...pageProps} />
        </div>
        <div className="w-max">
          <RightMenu />
        </div>
      </div>
    </Provider>
  );
}
