export type Svg = {
  blurHeight: number,
  blurWidth: number,
  height: number,
  src: string,
  width: number
}
export type AIcon = {
  svgUrl: string,
  isSelected?: boolean,
  twStyle?: string
}

export type SideColor = '--background' |
												'--foreground' |
													'--beige500' |
													'--beige100' |
													 '--grey900' |
													 '--grey500' |
										       '--grey300' |
													 '--grey100' |
													'--secGreen' |
												 '--secYellow' |
													 '--secCyan' |
													 '--secNavy' |
														'--secRed' |
												 '--secPurple' |
													'--otPurple' |
											 '--otTurquoise' |
	                         '--otBrown' |
												 '--otMagenta' |
	                          '--otBlue' |
												'--otNavyGrey' |
											 '--otArmyGreen' |
														'--otGold' |
													'--otOrange' |
														 '--white'

export type Transactions = {
	avatar: string,
	name: string,
	category?: string,
	date: string,
	amount: number,
	recurring?: boolean
} 
