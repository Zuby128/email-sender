import * as handlebars from "handlebars";
import { personalizedTemplate } from "@/lib/templates/personalized-epost";

export function compilePersonalizedTemplate(name: string) {
  const template = handlebars.compile(personalizedTemplate);

  const htmlBody = template({
    name: name,
  });

  return htmlBody;
}
