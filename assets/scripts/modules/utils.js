 /*========================================================================

	** 編集時注意事項 **

	「/assets/scripts/」以下のjsファイルは、webpackによって全てbundle.jsへ統合されます。
	webpackを使用出来ない場合で、add.jsなど別ファイルにてscriptを書く場合は
	「/assets/scripts_unbundle/」内にファイルを追加して、htmlよりscriptタグで読み込んでください。

========================================================================*/


/*====================================

	0. libraly Module

====================================*/

export default class Utils {
	pageSize(device) {
		switch(device) {
			case 'minsp':
				return 320
				break
			case 'maxsp':
				return 660
				break
			case 'maxtb':
				return 960
				break
			case 'minpc':
				return 1100
				break
		}
	}
}
