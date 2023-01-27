interface TextProps {
    value: string | JSX.Element;
    color?: "Gray" | "Blue";
    textStyle:
      | "HeadingOne"
      | "HeadingTwo"
      | "SubTitle"
      | "SmallBold"
      | "Bold"
      | "Description";
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


interface Tours{
    id: number
    title: string
    description: string
    pay: number
    image: string
}
interface contentDataType{
    tours: Tours[]
    BannerImage: string[]
}