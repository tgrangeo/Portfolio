import { BingoImgList } from "./imgList"
import { transImgList } from "./imgList"
import { proteinsImgList } from "./imgList"
import { compagnionImgList } from "./imgList"

export const ProjectList = [
	{
		name: "Bingo",
		image: BingoImgList,
		skills: "Flutter, Dart",
		resume: "A desktop app to play bingo with your friends (number cardboard not included)"
	},
	{
		name: "Proteins",
		image: proteinsImgList,
		skills: "Flutter, Dart, three_dart(3D), API",
		resume: "A phone app to render 3D molecule"
	},
	{
		name: "Compagnion",
		image: compagnionImgList,
		skills: "Flutter, Dart",
		resume: "A phone App who connect to the school API and display student information"
	},
	{
		name: "Transcendence",
		image: transImgList,
		skills: "React, Nest, Docker, etc...",
		resume: "Last core curriculum project from school, a pong multiplayer navigator game with social interaction"
	}
]