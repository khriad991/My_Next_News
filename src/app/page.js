
import MainLayout from "@/components/main/MainLayout";

import Slider from "@/components/main/Slider";
const getData =async () => {
    const slider = (await (await fetch(`${process.env.HOST}/api/news/type?type=slider`)).json())['data']
    return {slider}
}



export default async function page({slider}  ) {
    const  data = (await getData()).slider

  return (
    <MainLayout>
      <Slider slider={data} />







    </MainLayout>
  );
}
