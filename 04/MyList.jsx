import MyListCard from "./MyListCard"
import MyListData from "./MyListData.json"

export default function MyList() {
    {/*const title = 'HTML';
    const imgUrl = './img/html.png';
    const content = 'HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용';*/}  
    const tags = MyListData.map(item => <MyListCard key={item.title} title={item.title} imgUrl={item.imgUrl} content={item.content}/>);
  return (
    <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {tags}
      {/*<MyListCard title={title} imgUrl={imgUrl} content={content} />
      <MyListCard title={title} imgUrl={imgUrl} content={content} />
      <MyListCard title={title} imgUrl={imgUrl} content={content} />
      <MyListCard title={title} imgUrl={imgUrl} content={content} />*/}
    </div>
  )
}
