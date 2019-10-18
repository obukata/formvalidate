/*========================================================================

	** 編集時注意事項 **

	「/assets/scripts/」以下のjsファイルは、webpackによって全てbundle.jsへ統合されます。
	webpackを使用出来ない場合で、add.jsなど別ファイルにてscriptを書く場合は
	「/assets/scripts_unbundle/」内にファイルを追加して、htmlよりscriptタグで読み込んでください。

========================================================================*/


/*====================================

	0. libraly Module

====================================*/


/*====================================

	1. event Function

====================================*/

window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	Squib.formValidate()

}, false)

window.onload = () => {
	'use strict'

}


/*====================================

	2. Squib Module

====================================*/

const Squib = {


	formValidate: () => {
	}
}
