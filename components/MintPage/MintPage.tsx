import { useMeasure } from "react-use"
import { useMediaQuery } from "usehooks-ts"
import Layout from "../Layout"
import Footer from "../Footer"
import { useTheme } from "../../providers/ThemeProvider"
import Title from "../Common/Title"
import { Button } from "../../shared/Button"
import Content from "../Common/Content"

const MintPage = () => {
  const [containerRef, { width }] = useMeasure()
  const isResponsive = useMediaQuery("(max-width: 1440px)")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { themeMode } = useTheme()

  return (
    <Layout type="base">
      <div
        className="relative overflow-y-auto min-h-[100vh] overflow-x-hidden z-[1] w-[100vw]"
        ref={containerRef}
      >
        {width && (
          <div
            className="relative z-[6] flex flex-col items-center pt-[80px]"
            style={{
              width: `${width}px`,
              height: isResponsive ? `900px` : `${(1020 / 1440) * width}px`,
              minHeight: isResponsive ? "100vh" : "",
              backgroundImage:
                // eslint-disable-next-line no-nested-ternary
                themeMode === "light"
                  ? "url('/assets/Claim/white_background.svg')"
                  : isMobile
                  ? "url('/assets/Mint/mobile_background.svg')"
                  : "url('/assets/Mint/background.png')",
              backgroundSize: isResponsive ? "cover" : "cover",
              // eslint-disable-next-line no-nested-ternary
              backgroundPosition: isResponsive
                ? isMobile
                  ? `bottom center`
                  : `bottom right`
                : `center`,
            }}
          >
            <div
              className="max-w-[1280px] flex-grow flex flex-col justify-end md:flex-row items-center 
            pb-[250px] samsungS8:pb-[270px] xs:pb-[290px] md:pb-0 relative z-[100]"
            >
              <div
                className="dark:bg-[#00000069] rounded-[20px] 
              pt-[40px] pb-[20px] px-[40px] 
              dark:border-[1px] dark:border-[black]
              flex flex-col items-center gap-[30px]
             "
              >
                <Title text="Mint Your Cre8ors" />
                <Button id="passports_btn_mint" className="w-[592px]">
                  Passports
                </Button>
                <Button id="allowlist_btn_mint" className="w-[592px]">
                  Allowlist
                </Button>
                <Button id="public_btn_mint" className="w-[592px]">
                  Public
                </Button>
                <Content
                  content="Passports: July 27th @ 8am EST • Allowlist: July 28th @ 8am EST • Public Sale : July 29th 8am EST"
                  className="!text-[13px]"
                />
              </div>
            </div>
            <Footer className="!pt-0 !pb-0 !bg-transparent relative z-[10]" />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default MintPage
