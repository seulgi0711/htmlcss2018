// Import React
import React from "react";
import styled from "styled-components";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Layout,
  ListItem,
  List,
  Link,
  Image,
  Notes,
  Quote,
  Slide,
  Text,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Appear,
  Fit,
  Fill
} from "spectacle";
import preloader from "spectacle/src/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  wahtsup: require("../assets/whatsup.png"),
  wahtsupLayout: require("../assets/whatsup_layout.png"),
  flexNone1: require("../assets/flexnone1.png"),
  flexNone2: require("../assets/flexnone2.png"),
  flexNone3: require("../assets/flexnone3.png"),
  flexNone4: require("../assets/flexnone4.png"),
  flexNone5: require("../assets/flexnone5.png"),
  doorayMail: require("../assets/dooray-mail.png"),
  doorayMailLayout: require("../assets/dooray-mail-layout.png"),
  locateA: require("../assets/locate-a.png"),
  onoffMixMenus: require("../assets/onoffmix_menus.png"),
  menu1: require("../assets/menu1.png"),
  doorayMenu: require("../assets/dooray-menus.png"),
  doorayLeftMenu: require("../assets/doorayLeftMenu.png"),
  doorayLeftMenuHover: require("../assets/doorayLeftMenuHover.png")
};

preloader(Object.keys(images).map((key) => images[key]));

const examples = {
  locate: require("raw-loader!../example/locate.html"),
  locateHorizontal: require("raw-loader!../example/locate-horizontal.scss"),
  locateVertical: require("raw-loader!../example/locate-vertical.scss"),
  align1: require("raw-loader!../example/align1.scss"),
  align2: require("raw-loader!../example/align2.scss"),
  align3: require("raw-loader!../example/align3.scss"),
  align4: require("raw-loader!../example/align4.scss"),
  align5: require("raw-loader!../example/align5.scss"),
  space1: require("raw-loader!../example/space1.scss"),
  space2: require("raw-loader!../example/space2.scss"),
  space3: require("raw-loader!../example/space3.scss"),
  space4: require("raw-loader!../example/space4.scss"),
  menu1: require("raw-loader!../example/menu1.scss"),
  menu2: require("raw-loader!../example/menu2.scss"),
  menu3: require("raw-loader!../example/menu3.scss"),
  menu4: require("raw-loader!../example/menu4.scss"),
  menu5: require("raw-loader!../example/menu5.scss"),
  menu6: require("raw-loader!../example/menu6.scss"),
  menu7: require("raw-loader!../example/menu7.scss")
};

const colors = {
  primary: "#1F2022",
  secondary: "white",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
};

const theme = createTheme(colors, {
  name: "Noto Sans KR",
  googleFont: true
});

theme.screen.components.text.color = colors.quarternary;
theme.screen.components.listItem.color = colors.quarternary;
theme.screen.components.quote.color = colors.quarternary;
theme.screen.components.quote.borderLeft = `1px solid ${colors.secondary}`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading size={2} textColor="tertiary" caps textAlign="left">
            HTML/CSS
          </Heading>
          <Text textSize={30} textAlign="left" margin="40px 5px 0">
            Dooray!개발실 성슬기
          </Text>
        </Slide>

        <Slide>
          <Heading size={5} textColor="tertiary" caps>실습 내용</Heading>
          <Heading size={6} textColor="quarternary" caps>Layout</Heading>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Layout</Heading>
          <Appear>
            <Text>큰 틀을 잡아 주는 작업</Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Layout</Heading>
          <Text textAlign="cneter">Semantic Elements</Text>
          <Text textAlign="cneter">Flex</Text>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Senamtic Elements</Heading>
          <Text>Semantic: (언어) 의미의, 의미론적인</Text>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Senamtic Elements</Heading>
          <Text>개발자 가독성이 좋다.</Text>
          <Text>검색 엔진이 논리적으로 찾을 수 있다.</Text>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Senamtic Elements</Heading>
          <Table margin="40px 0 0 7%">
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Element</TableHeaderItem>
                <TableHeaderItem>Description</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>header</TableItem>
                <TableItem>문서의 헤더 부분</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>main</TableItem>
                <TableItem>주요 콘텐츠가 들어가는 부분</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>nav</TableItem>
                <TableItem>문서의 네비게이션 구조</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>aside</TableItem>
                <TableItem>사이드에 위치하는 공간</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>section</TableItem>
                <TableItem>여로 중심 내용을 감싸는 공간</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>footer</TableItem>
                <TableItem>문서의 푸터 부분</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide>
          <Image src={images
            .wahtsup
            .replace("/", "")}/>
        </Slide>

        <Slide>
          <Image src={images
            .wahtsupLayout
            .replace("/", "")}/>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>실습 #1 Semantic Elements로 Layout 구성하기</Heading>
          <Text>Dooray! Mail Layout</Text>
        </Slide>

        <Slide>
          <Image src={images
            .doorayMail
            .replace("/", "")}/>
        </Slide>

        <Slide>
          <Image
            src={images
            .doorayMailLayout
            .replace("/", "")}/>
        </Slide>

        <Slide>
          <Link
            textColor="tertiary"
            href="https://codepen.io/seulgi0711/pen/wpxxXB"
            target="_#1">#1) https://codepen.io/seulgi0711/pen/wpxxXB</Link>
          <Text>div 엘리먼트를 Semantic Elements로 바꿔주세요.</Text>
          <Image
            src={images
            .doorayMailLayout
            .replace("/", "")}/>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Display</Heading>
          <Text>inline</Text>
          <Text>block</Text>
          <Text>inline-block</Text>
          <Text>table</Text>
          <Text>flex</Text>
          <Text>inline-flex</Text>
          <Text>grid</Text>
          <Text>...</Text>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Display</Heading>
          <Text>inline</Text>
          <Text>block</Text>
          <Text>inline-block</Text>
          <Text>table</Text>
          <Text textColor="tertiary" bold>flex</Text>
          <Text>inline-flex</Text>
          <Text>grid</Text>
          <Text>...</Text>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>배치</Heading>
          <Appear>
            <Text>Container에 display 속성을 flex로 적용</Text>
          </Appear>
          <iframe
            height="265"
            scrolling="no"
            title="locate"
            src="//codepen.io/seulgi0711/embed/jYpYez/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/jYpYez/">locate</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>배치</Heading>
          <Text>가로 배치</Text>
          <iframe
            height="265"
            scrolling="no"
            title="locate2"
            src="//codepen.io/seulgi0711/embed/vpapoy/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/vpapoy/">locate2</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <Appear>
            <CodePane lang="css" source={examples.locateHorizontal}/>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>배치</Heading>
          <Text>세로 배치</Text>
          <iframe
            height="265"
            scrolling="no"
            title="locate3"
            src="//codepen.io/seulgi0711/embed/KZBQPx/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/KZBQPx/">locate3</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <Appear>
            <CodePane lang="css" source={examples.locateVertical}/>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>실습 #2 flex를 이용해서 Layout 배치하기</Heading>
          <Text>Dooray! Mail Layout</Text>
        </Slide>

        <Slide>
          <Link
            textColor="tertiary"
            href="https://codepen.io/seulgi0711/pen/zpLJXQ"
            target="_#2">#2) https://codepen.io/seulgi0711/pen/zpLJXQ</Link>
          <Text textSize="30px">flex, flex-direction 속성을 이용해서 layout의 방향만 배치해 주세요</Text>
          <Text textSize="30px">여러 엘리먼트를 감싸고 있는 엘리먼트가 flex container가 되면 됩니다.</Text>
          <Image src={images
            .locateA
            .replace("/", "")}/>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>크기 조정</Heading>
          <CodePane lang="css" source={examples.space1}/>
          <iframe
            height="265"
            scrolling="no"
            title="space1"
            src="//codepen.io/seulgi0711/embed/PEBeXm/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>
            See the Pen
            <a href="https://codepen.io/seulgi0711/pen/PEBeXm/">space1</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>크기 조정</Heading>
          <CodePane lang="css" source={examples.space2}/>
          <iframe
            height="265"
            scrolling="no"
            title="space1"
            src="//codepen.io/seulgi0711/embed/QaBrQO/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/QaBrQO/">space1</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>크기 조정</Heading>
          <Text>left: 50px, right: 120px</Text>
          <Layout>
            <Fill>
              <Image
                src={images
                .flexNone2
                .replace("/", "")}/>
            </Fill>
            <Fill>
              <Image
                src={images
                .flexNone3
                .replace("/", "")}/>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>크기 조정</Heading>
          <Text>flex-item의 flex 속성을 이용</Text>
          <CodePane lang="css" source={examples.space3}/>
          <iframe
            height="265"
            scrolling="no"
            title="space3"
            src="//codepen.io/seulgi0711/embed/XVBYgW/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/XVBYgW/">space3</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>크기 조정</Heading>
          <Text>left: 50px, right: 120px</Text>
          <Layout>
            <Fill>
              <Image
                src={images
                .flexNone4
                .replace("/", "")}/>
            </Fill>
            <Fill>
              <Image
                src={images
                .flexNone5
                .replace("/", "")}/>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>실습 #3 flex를 이용해서 Layout의 크기를 조정해 주세요</Heading>
          <Text>Dooray! Mail Layout</Text>
        </Slide>

        <Slide>
          <Link
            textColor="tertiary"
            href="https://codepen.io/seulgi0711/pen/aEjaLX"
            target="_#3">#3) https://codepen.io/seulgi0711/pen/aEjaLX</Link>
          <Text textSize="30px">width, height, flex 속성을 이용해서 크기를 조정해 주세요.</Text>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem/>
                <TableHeaderItem>width</TableHeaderItem>
                <TableHeaderItem>height</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>header</TableItem>
                <TableItem>100%</TableItem>
                <TableItem>54px</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>contents</TableItem>
                <TableItem>100%</TableItem>
                <TableItem>100%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>nav</TableItem>
                <TableItem>170px</TableItem>
                <TableItem>100%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>main-contents</TableItem>
                <TableItem>nav 제외한 나머지</TableItem>
                <TableItem>100%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>footer</TableItem>
                <TableItem>100%</TableItem>
                <TableItem>20px</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Menu</Heading>
          <Image src={images
            .onoffMixMenus
            .replace("/", "")}/>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Menu</Heading>
          <Text>목록은 ul, ol, li 엘리먼트를 이용한다.</Text>
          <Text>메뉴는 링크 이동 a 엘리먼트를 이용한다.</Text>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Menu</Heading>
          <Text>Dooray! Menu</Text>
          <Image src={images
            .doorayMenu
            .replace("/", "")}/>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Menu</Heading>
          <CodePane lang="css" source={examples.menu1}/>
          <iframe
            height="265"
            scrolling="no"
            title="menu"
            src="//codepen.io/seulgi0711/embed/rprqGN/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/rprqGN/">menu</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Menu</Heading>
          <Text textAlign="left">기본 목록</Text>
          <List>
            <ListItem textSize="30px">목록 앞 불릿이 있다.</ListItem>
            <ListItem textSize="30px">padding이 있다.(초록색 영역)</ListItem>
            <ListItem textSize="30px">margin이 있다. (주황색 영역)</ListItem>
            <ListItem textSize="30px">밑줄, 링크 색이 있다.</ListItem>
          </List>
          <Image src={images
            .menu1
            .replace("/", "")}/>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Menu</Heading>
          <Text textAlign="left">기본 스타일 제거</Text>
          <List>
            <ListItem textSize="30px">불릿 제거: list-style</ListItem>
            <ListItem textSize="30px">padding, margin</ListItem>
            <ListItem textSize="30px">밑줄 제거: text-decoration</ListItem>
            <ListItem textSize="30px">글자색 변경: color</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Menu</Heading>
          <Text textAlign="left">기본 스타일 제거</Text>
          <CodePane lang="css" source={examples.menu2}/>
          <iframe
            height="265"
            scrolling="no"
            title="menu2"
            src="//codepen.io/seulgi0711/embed/ppZxYz/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/ppZxYz/">menu2</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Menu</Heading>
          <Text textAlign="left">메뉴 가로 배치</Text>
          <CodePane lang="css" source={examples.menu3}/>
          <iframe
            height="265"
            scrolling="no"
            title="menu5"
            src="//codepen.io/seulgi0711/embed/xpJQVL/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/xpJQVL/">menu5</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Menu</Heading>
          <Text textAlign="left">메뉴 디자인 변경</Text>
          <List>
            <ListItem textSize="30px">:hover를 이용해 마우스 오버시 스타일 추가</ListItem>
          </List>
          <CodePane lang="css" source={examples.menu4}/>
          <iframe
            height="265"
            scrolling="no"
            title="menu3"
            src="//codepen.io/seulgi0711/embed/aEjQbJ/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/aEjQbJ/">menu3</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Menu</Heading>
          <Text textAlign="left">메뉴 범위 변경</Text>
          <CodePane lang="css" source={examples.menu5}/>
          <iframe
            height="265"
            scrolling="no"
            title="menu4"
            src="//codepen.io/seulgi0711/embed/EopOVW/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/EopOVW/">menu4</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>Menu</Heading>
          <Text textAlign="left">메뉴 글자 가운데 정렬</Text>
          <CodePane lang="css" source={examples.menu6}/>
          <iframe
            height='265'
            scrolling='no'
            title='menu6'
            src='//codepen.io/seulgi0711/embed/eyjxqJ/?height=265&theme-id=0&default-tab=html,result&embed-version=2'
            frameBorder="no"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href='https://codepen.io/seulgi0711/pen/eyjxqJ/'>menu6</a>
            by Seulgi Seong (<a href='https://codepen.io/seulgi0711'>@seulgi0711</a>) on
            <a href='https://codepen.io'>CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>실습 #4 menu를 만들어 주세요</Heading>
          <Text>Dooray! Mail Layout</Text>
        </Slide>

        <Slide>
          <Link
            textColor="tertiary"
            href="https://codepen.io/seulgi0711/pen/OzwqpG"
            target="_#4">#4) https://codepen.io/seulgi0711/pen/OzwqpG</Link>
          <Text textSize="30px">메뉴를 만들어 주세요.</Text>
          <Layout>
            <Image
              src={images
              .doorayLeftMenu
              .replace("/", "")}/>
            <Image
              src={images
              .doorayLeftMenuHover
              .replace("/", "")}/>
          </Layout>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Element</TableHeaderItem>
                <TableHeaderItem>속성</TableHeaderItem>
                <TableHeaderItem>값</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
            <TableRow>
                <TableItem>li.menu</TableItem>
                <TableItem>height</TableItem>
                <TableItem>24px</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>a</TableItem>
                <TableItem>font-size</TableItem>
                <TableItem>13px</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>a</TableItem>
                <TableItem>좌우 padding</TableItem>
                <TableItem>20px</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>a</TableItem>
                <TableItem>글자 색</TableItem>
                <TableItem>#222</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>a:hover</TableItem>
                <TableItem>배경 색</TableItem>
                <TableItem>#f0f1f5</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        {/* <Slide>
          <Heading size={4} textColor="tertiary" caps>정렬</Heading>
          <Text>justify-content</Text>
          <Text>align-items</Text>
          <Appear>
            <div>
              <Cite>flex-start</Cite>
              <Cite>center</Cite>
              <Cite>flex-end</Cite>
            </div>
          </Appear>
          <Appear>
            <Text>flex-direction 방향에 따라 기준이 달라진다.</Text>
          </Appear>
        </Slide> */}

        {/* <Slide>
          <Heading size={4} textColor="tertiary" caps>정렬</Heading>
          <CodePane lang="css" source={examples.align1}/>
          <iframe
            height="265"
            scrolling="no"
            title="align1"
            src="//codepen.io/seulgi0711/embed/OzwQVO/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/OzwQVO/">align1</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>정렬</Heading>
          <CodePane lang="css" source={examples.align2}/>
          <iframe
            height="265"
            scrolling="no"
            title="align2"
            src="//codepen.io/seulgi0711/embed/gojzra/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/gojzra/">align2</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>정렬</Heading>
          <CodePane lang="css" source={examples.align3}/>
          <iframe
            height="265"
            scrolling="no"
            title="align3"
            src="//codepen.io/seulgi0711/embed/NXBMRp/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/NXBMRp/">align3</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>정렬</Heading>
          <CodePane lang="css" source={examples.align4}/>
          <iframe
            height="265"
            scrolling="no"
            title="align4"
            src="//codepen.io/seulgi0711/embed/eyjrEj/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/eyjrEj/">align4</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>정렬</Heading>
          <CodePane lang="css" source={examples.align5}/>
          <iframe
            height="265"
            scrolling="no"
            title="align5"
            src="//codepen.io/seulgi0711/embed/YYjLEP/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen="true"
            style={{
            width: "100%"
          }}>See the Pen
            <a href="https://codepen.io/seulgi0711/pen/YYjLEP/">align5</a>
            by Seulgi Seong (<a href="https://codepen.io/seulgi0711">@seulgi0711</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </Slide>

        <Slide>
          <Heading size={4} textColor="tertiary" caps>실습 #2 flex를 이용해서 Layout 구성하기</Heading>
          <Text>Dooray! Mail Layout</Text>
        </Slide>

        <Slide>
          <Link
            textColor="tertiary"
            href="https://codepen.io/seulgi0711/pen/aEjaLX"
            target="_#2">#2) https://codepen.io/seulgi0711/pen/aEjaLX</Link>
          <Text>flex를 이용해서 Layout을 구성해 주세요.</Text>
          <Text>width, height, display, flex-direction, overflow, flex</Text>

        </Slide> */}

        {/* <Slide bgColor="tertiary" align="left center">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide> */}
      </Deck>
    );
  }
}
