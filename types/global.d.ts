interface TextProps {
    value: string | JSX.Element;
    color?: "Gray" | "Blue";
    textStyle:
      | "HeadingOne"
      | "HeadingTwo"
      | "SubTitle"
      | "SmallBold"
      | "Bold"
      | "Description"
      | "Footer"
}
interface TextLinkProps {
    href: string;
    color?: "Gray" | "Blue";
    value: string | JSX.Element;
    textStyle:
      | "HeadingOne"
      | "HeadingTwo"
      | "SubTitle"
      | "Description"
      | "Bold"
      | "SmallBold";
}

interface ContainerProps{
    children: ReactNode
}
interface PageProps {
    children: ReactNode;
    title: string;
}
interface NavLinkProps{
    href: string
    children: ReactNode
}

interface HomeCardType{
    id: number
    title: string
    description: string
    pay?: number
    image: string
    card?: | "tour" | "explore" | "blog"
    isBlog?: boolean
}

interface Blog{
    image: string
    id: number
    title: string
    description: string
    postAt: string
    author: string
}

interface Tours extends HomeCardType {}

interface contentDataType{
    tours: Tours[]
    explore: Tours[]
    blogs: Blog[]
    BannerImage: string[]
}

interface SectionHomeProps{
    title: string
    href: string
    card: | "tour" | "explore" | "blog"
}