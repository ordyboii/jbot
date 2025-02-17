import { env } from "@common/env";
import { WebClient } from "@slack/web-api";
import Replicate from "replicate";

export const replicate = new Replicate({
	auth: env.replicateApiToken,
});

export const slack = new WebClient(env.slackApiToken);

export async function testSlackApi() {
	return slack.api.test();
}
