import { getContentsHandler } from "./lib/controllers/VAL-CONTENT-V1";
import { Locale } from "./types/LocalizedNamesDto";
import { Region } from "./types/Region";

class ValorantApi {
	private key: string;

	constructor(key: string) {
		if (!key) {
			throw new Error("No api key provided!");
		}
		this.key = key;
	}

	async getContents(data: { locale: Locale; region: Region }) {
		return await getContentsHandler({ ...data, apiKey: this.key });
	}
}

console.log(process.env.API_KEY);

export default ValorantApi;
