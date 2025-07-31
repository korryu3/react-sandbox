import type { FC } from 'react';
import '@/index.css'

type ListItemProps = {
    text: string;
}

type ListProps = {
    items: string[];
}

const Header: FC = () => (
    <header>
        <h1 className='bg-[#1e1e1e] text-white p-4 pl-8 text-3xl font-black rounded-tr-3xl rounded-tl-3xl'>カラフルなフルーツサラダ</h1>
    </header>
)

const ImagePlaceHolder: FC = () => (
    // ダミーのrectangle画像を使用
    <img src="https://placehold.jp/300x200.png" alt="Fruit Salad" className='rounded-lg'/>
)

const Timer: FC<{ time: string }> = ({ time }) => (
    <div className="text-gray-500 text-sm flex items-center gap-2">
        <img src="/clock-icon.svg" alt="Timer" className="w-4 h-4" />{time}
    </div>
)

const ListItem: FC<ListItemProps> = ({ text }) => (
    <li>
        <span className="text-sm leading-5 pr-2">●</span>
        <span className="text-lg">{text}</span>
    </li>
);

const List: FC<ListProps> = ({ items }) => (
    <ul>
        {items.map((item, index) => (
            <ListItem key={index} text={item} />
        ))}
    </ul>
);

const IngredientsSection: FC = () => {
    const ingredients = [
        "イチゴ",
        "りんご",
        "オレンジ",
        "ブラックベリー",
        "はちみつ",
        "モッツァレラチーズ",
        "ミント",
    ];

    return (
        <section className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h2 className="font-black text-2xl">材料（2人前）</h2>
                <Timer time="10分" />
            </div>
            <List items={ingredients} />
        </section>
    );
}

const ActionButton: FC = () => <button className="bg-[#43B562] text-white rounded-lg text-2xl p-4 font-bold hover:bg-[#36a149]">レシピを見る</button>;

const CardLayout: FC = () => (
    <article className="p-8 flex flex-col gap-8 bg-white rounded-br-3xl rounded-bl-3xl shadow-lg">
            <ImagePlaceHolder />
            <IngredientsSection />
            <ActionButton />
    </article>
);

export const FruitSaladCard = () => (
    <section className='mx-auto w-[460px]'>
            <Header />
            <CardLayout />
    </section>
);
