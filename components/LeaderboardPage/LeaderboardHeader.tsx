import { useMediaQuery } from "usehooks-ts"

const LeaderboardHeader = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <thead className="border-b-[2px] border-black border-solid">
      <tr>
        <th
          className="p-[5px] md:p-4 
                    text-left border-r-[2px] 
                    border-black text-center
                    uppercase 
                    text-[8px] xs:text-[11px] md:text-[18px]
                    md:min-w-[100px]"
        >
          Rank
        </th>
        <th
          className="p-[5px] md:p-4 
                    text-left border-r-[2px] 
                    border-black text-center 
                    uppercase 
                    text-[8px] xs:text-[11px] md:text-[18px]
                    w-[100px] xs:!w-[130px] md:!w-[200px]"
        >
          # of NFTs {!isMobile ? "Owned" : ""}
        </th>
        <th
          className="p-[5px] md:p-4 
                    text-left border-r-[2px] 
                    border-black text-center 
                    uppercase 
                    text-[8px] xs:text-[11px] md:text-[18px]"
        >
          Address
        </th>
      </tr>
    </thead>
  )
}

export default LeaderboardHeader