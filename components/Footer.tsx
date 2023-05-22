import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import daoFooterLogo from "../public/assets/dao-d.png";

export function Footer() {
    return (
			<footer className="flex items-center text-white justify-between space-x-2.5 sm:justify-between px-2.5 sm:px-5 py-5">
				<div className="items-center grid-flow-col w-8">
					<Image
						src={daoFooterLogo}
						alt="logo"
						width={32}
						height={32}
					/>
				</div>
				<div className="flex space-x-2.5">
					<SocialIcon
						network="twitter"
						target="_blank"
						style={{ height: 25, width: 25 }}
						url="https://twitter.com/daobox_app"
					/>
					<SocialIcon
						network="discord"
						target="_blank"
						style={{ height: 25, width: 25 }}
						url="https://discord.gg/CNjdqGwYGy"
					/>
					<SocialIcon
						network="github"
						target="_blank"
						style={{ height: 25, width: 25 }}
						url="https://github.com/DAObox"
					/>
					<Link target="_blank" href={"https://lenster.xyz/u/daobox"}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="25"
							fill="none"
							viewBox="0 0 18 25"
						>
							<g
								fill="#F8FAFC"
								clipPath="url(#clip0_52_243)"
							>
								<path d="M8.826 14.14c-.212.284-.394.59-.618.86-1.067 1.285-2.421 2.058-4.071 2.326-1.256.204-2.469.035-3.642-.444-.165-.067-.197-.138-.122-.303.189-.392.177-.384.57-.247 2.233.785 4.269.44 6.092-1.08a.376.376 0 00.094-.11c-.28.075-.555.157-.842.197-1.122.153-2.146-.099-3.091-.707-.087-.055-.099-.106-.032-.189.103-.125.17-.318.304-.377.133-.063.263.122.401.193.874.451 1.792.597 2.744.33 1.382-.385 2.052-1.477 2.186-2.753.02-.173.106-.389.004-.514-.103-.122-.331-.071-.504-.095C5.842 10.89 3.66 9.96 1.834 8.26 1.38 7.835.967 7.379.739 6.79c-.374-.962-.276-1.896.264-2.764.681-1.092 1.67-1.704 2.98-1.704.65 0 1.229.243 1.752.62.052.035.095.094.182.098.043-.29.098-.577.204-.848.35-.915 1-1.54 1.926-1.83 1.31-.404 2.523-.192 3.543.785.488.472.744 1.069.835 1.736.012.09-.004.228.161.102 1.469-1.135 3.284-.738 4.398.507 1.174 1.311 1.162 3.066-.035 4.35-1.276 1.367-2.835 2.29-4.603 2.875-.874.287-1.772.471-2.689.557-.087.008-.154.016-.15.13.028 1.182.39 2.207 1.45 2.859.834.51 1.743.561 2.677.322.39-.099.756-.267 1.09-.487.099-.067.162-.067.22.039.032.055.076.106.111.161.197.287.264.236-.102.444-1.134.651-2.331.84-3.595.436a.285.285 0 00-.165-.012c.114.098.228.204.346.298 1.229.954 2.63 1.363 4.174 1.253a5.61 5.61 0 001.897-.483c.126-.055.174-.028.217.086.035.098.079.197.134.283.086.141.035.2-.103.26a6.572 6.572 0 01-3.114.521c-1.886-.153-3.437-.954-4.65-2.41-.213-.256-.382-.546-.583-.884-.004.126-.012.192-.012.259 0 .942-.003 1.885.004 2.827 0 .173-.05.224-.224.22-.457-.008-.457 0-.457-.451.004-.935.004-1.87.004-2.804zm2.993-9.478c-.052-.07-.032-.138-.032-.2 0-.405.012-.813-.004-1.218-.027-.734-.295-1.37-.894-1.826C10.063.79 9.141.68 8.173 1.026c-.811.29-1.323.871-1.528 1.712-.09.377-.09.765-.07 1.15.015.275.027.55.042.88-.256-.275-.476-.507-.693-.738-.413-.44-.87-.817-1.472-.97-1.662-.413-3.237 1.08-3.26 2.544-.012.782.323 1.398.858 1.932 1.607 1.606 3.556 2.537 5.772 2.941.496.09 1 .17 1.504.146a10.936 10.936 0 003.201-.676c1.512-.557 2.843-1.394 3.946-2.576.42-.451.684-.977.704-1.598.024-.84-.334-1.52-.94-2.077-.835-.766-1.973-.919-2.914-.397-.434.24-.76.601-1.095.95-.13.142-.244.299-.41.413zM13.05 21.264c0 .864-.003 1.728.005 2.592 0 .149-.032.208-.193.2a19.32 19.32 0 00-1.063 0c-.114 0-.173-.04-.217-.15l-1.185-3.156c-.213-.562-.425-1.127-.634-1.689-.031-.082-.07-.133-.17-.125-.129.015-.09.11-.09.18-.004 1.56 0 3.114 0 4.673 0 .267 0 .267-.271.267-.41 0-.41 0-.41-.396 0-1.638.004-3.271-.004-4.909 0-.188.051-.247.24-.24.339.016.682.012 1.024.008.11 0 .173.024.217.142.535 1.425 1.075 2.85 1.614 4.276.063.173.13.342.197.514.035.087.043.209.185.181.146-.024.083-.145.087-.22.003-1.54.003-3.075.003-4.614 0-.275 0-.275.28-.275.386 0 .386 0 .386.393v2.348zM15.858 24.17c-.61-.02-1.185-.145-1.626-.613-.366-.384-.48-.86-.473-1.37v-.02c.127-.227.34-.059.505-.102.082-.023.169-.008.165.122a1.37 1.37 0 00.024.31c.106.597.437.943 1.039 1.04.378.064.76.068 1.118-.105.378-.18.579-.48.575-.903-.004-.401-.252-.613-.587-.754-.334-.142-.689-.208-1.035-.299-.382-.098-.756-.224-1.09-.436-.863-.546-.765-1.96.22-2.407a2.517 2.517 0 012.224.036c.618.306.941 1.009.827 1.684-.012.06-.027.098-.094.102-.02 0-.04 0-.06.004-.492.028-.492.028-.52-.455-.027-.464-.26-.77-.7-.915a1.82 1.82 0 00-1.232.016c-.367.133-.552.404-.571.789-.016.33.165.605.511.765.32.146.658.22.997.299.326.075.645.16.953.306.574.275.87.715.834 1.359-.035.62-.35 1.056-.905 1.32-.35.164-.717.23-1.099.227zM4.727 21.264c0-.852.004-1.7-.004-2.552 0-.153.044-.2.197-.197 1.004.008 2.008.008 3.012 0 .166 0 .233.036.229.216-.016.48.043.393-.398.397-.72.004-1.445.004-2.165 0-.142 0-.197.032-.193.185.007.49.007.981 0 1.472-.004.153.05.185.192.185.61-.008 1.221 0 1.831-.008.158-.004.201.047.201.2 0 .416.004.416-.41.416-.539 0-1.074.004-1.614-.004-.153-.004-.204.044-.2.2.007.491.007.982 0 1.473-.004.153.039.2.196.2.796-.007 1.587 0 2.383-.007.153 0 .208.043.204.196-.016.51.063.412-.413.416-.937.008-1.878-.004-2.815.008-.193 0-.24-.055-.24-.243.011-.849.007-1.7.007-2.553zM.49 21.296c0-.856.005-1.712-.003-2.572 0-.165.051-.212.212-.209.465.004.465-.003.465.456 0 1.406.004 2.811-.004 4.217 0 .193.04.26.244.256.807-.012 1.615 0 2.422-.008.185-.004.256.039.248.235-.012.385-.004.385-.39.385-.996 0-1.992-.004-2.992 0-.166 0-.21-.047-.21-.208.013-.852.009-1.7.009-2.552z"></path>
								<path d="M11.897 6.566c.166.322.15.625-.114.884-.197.196-.441.236-.693.153-.346-.11-.476-.385-.484-.766a1.19 1.19 0 00-.43.483.731.731 0 00-.09.275c-.012.189-.102.232-.276.22-.244-.016-.267-.031-.216-.279.134-.675.567-1.1 1.185-1.354.898-.373 2.008-.067 2.555.695.162.227.252.483.292.761.02.13-.028.185-.158.173a.593.593 0 00-.118 0c-.15.02-.213-.031-.232-.196-.071-.542-.666-1.025-1.22-1.049zM7.09 6.586c.169.507-.004.915-.426 1.025-.46.122-.771-.141-.905-.777a1.224 1.224 0 00-.547.828c-.012.059.015.15-.08.157-.133.008-.279.043-.4-.023-.052-.028-.02-.11-.013-.165.103-.75.71-1.363 1.52-1.524.835-.165 1.56.032 2.138.672.22.243.339.538.382.867.016.134-.024.2-.165.185a.89.89 0 00-.177 0c-.095.004-.13-.028-.15-.13-.09-.585-.555-1.02-1.177-1.115zM9.16 9.586c-.472-.031-.893-.188-1.208-.577-.11-.134-.09-.212.067-.271a.449.449 0 00.122-.063c.083-.063.134-.05.209.036.445.51 1.208.51 1.661.007.095-.106.24-.078.43.075.125.102.003.169-.04.224-.319.385-.74.55-1.24.57z"></path>
							</g>
							<defs>
								<clipPath id="clip0_52_243">
									<path
										fill="#fff"
										d="M0 0H17.667V24H0z"
										transform="translate(.333 .17)"
									></path>
								</clipPath>
							</defs>
						</svg>
					</Link>
				</div>
			</footer>
		);
}