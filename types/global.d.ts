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
      | "DescriptionTourCard"
      | "DescriptionBlog"
      | "DescriptionDetail"
      | "DescriptionBlogCard"
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

interface Iternary{
    title: string
    description: string
}

interface HomeCardType{
    id: string
    title: string
    description: string
    longDesc?: string
    iternary?: Iternary[]
    justDesc?: string[]
    pay?: number
    include?: string[]
    exclude?: string[]
    image: string
    card?: | "tour" | "explore" | "blog"
    isBlog?: boolean
}

interface Blog{
    image: string
    id: string
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

interface TourCardProps{
    id: string
    title: string
    description: string
    pay?: number
    image: string
}
interface FooterProps{
    value: string
}

interface TourSectionProps{
    title: string
    section: "Tour" | "Explore"
}