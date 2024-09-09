var N;(function(t){t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT"})(N||(N={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(m||(m={}));var T;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(T||(T={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=["user","model","function","system"];var b;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(b||(b={}));var M;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(M||(M={}));var G;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(G||(G={}));var L;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(L||(L={}));var p;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(p||(p={}));var x;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(x||(x={}));var U;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(U||(U={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class R extends l{constructor(e,n){super(e),this.response=n}}class Y extends l{constructor(e,n,s,o){super(e),this.status=n,this.statusText=s,this.errorDetails=o}}class C extends l{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V="https://generativelanguage.googleapis.com",J="v1beta",X="0.15.0",W="genai-js";var _;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(_||(_={}));class Q{constructor(e,n,s,o,i){this.model=e,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var e,n;const s=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||J;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||V}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function z(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${W}/${X}`),e.join(" ")}async function Z(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",z(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let s=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new C(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new C(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new C(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function tt(t,e,n,s,o,i){const a=new Q(t,e,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},ot(i)),{method:"POST",headers:await Z(a),body:o})}}async function I(t,e,n,s,o,i,a=fetch){const{url:r,fetchOptions:u}=await tt(t,e,n,s,o,i);return et(r,u,a)}async function et(t,e,n=fetch){let s;try{s=await n(t,e)}catch(o){nt(o,t)}return s.ok||await st(s,t),s}function nt(t,e){let n=t;throw t instanceof Y||t instanceof C||(n=new l(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function st(t,e){let n="",s;try{const o=await t.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new Y(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,s)}function ot(t){const e={};if((t==null?void 0:t.timeout)>=0){const n=new AbortController,s=n.signal;setTimeout(()=>n.abort(),t.timeout),e.signal=s}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),y(t.candidates[0]))throw new R(`${g(t)}`,t);return it(t)}else if(t.promptFeedback)throw new R(`Text not available. ${g(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),y(t.candidates[0]))throw new R(`${g(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),D(t)[0]}else if(t.promptFeedback)throw new R(`Function call not available. ${g(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),y(t.candidates[0]))throw new R(`${g(t)}`,t);return D(t)}else if(t.promptFeedback)throw new R(`Function call not available. ${g(t)}`,t)},t}function it(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```python\n"+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function D(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const at=[p.RECITATION,p.SAFETY,p.LANGUAGE];function y(t){return!!t.finishReason&&at.includes(t.finishReason)}function g(t){var e,n,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const i=t.candidates[0];y(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function v(t){return this instanceof v?(this.v=t,this):new v(t)}function rt(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(t,e||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(c){s[c]&&(o[c]=function(f){return new Promise(function(A,j){i.push([c,f,A,j])>1||r(c,f)})})}function r(c,f){try{u(s[c](f))}catch(A){d(i[0][3],A)}}function u(c){c.value instanceof v?Promise.resolve(c.value.v).then(h,E):d(i[0][2],c)}function h(c){r("next",c)}function E(c){r("throw",c)}function d(c,f){c(f),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function ct(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=lt(e),[s,o]=n.tee();return{stream:ut(s),response:dt(o)}}async function dt(t){const e=[],n=t.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return S(ft(e));e.push(o)}}function ut(t){return rt(this,arguments,function*(){const n=t.getReader();for(;;){const{value:s,done:o}=yield v(n.read());if(o)break;yield yield v(S(s))}})}function lt(t){const e=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return e.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new l("Failed to parse stream"));return}s.close();return}o+=a;let u=o.match(H),h;for(;u;){try{h=JSON.parse(u[1])}catch{s.error(new l(`Error parsing JSON response: "${u[1]}"`));return}s.enqueue(h),o=o.substring(u[0].length),u=o.match(H)}return i()})}}})}function ft(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t){if(s.candidates)for(const o of s.candidates){const i=o.index;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:o.index}),n.candidates[i].citationMetadata=o.citationMetadata,n.candidates[i].finishReason=o.finishReason,n.candidates[i].finishMessage=o.finishMessage,n.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[i].content||(n.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const r of o.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[i].content.parts.push(a)}}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t,e,n,s){const o=await I(e,_.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s);return ct(o)}async function k(t,e,n,s){const i=await(await I(e,_.GENERATE_CONTENT,t,!1,JSON.stringify(n),s)).json();return{response:S(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function O(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return ht(e)}function ht(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),o=!0):(e.parts.push(i),s=!0);if(s&&o)throw new l("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new l("No content is provided for sending chat message.");return s?e:n}function Et(t,e){var n;let s={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=t.generateContentRequest!=null;if(t.contents){if(o)throw new C("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=t.contents}else if(o)s=Object.assign(Object.assign({},s),t.generateContentRequest);else{const i=O(t);s.contents=[i]}return{generateContentRequest:s}}function F(t){let e;return t.contents?e=t:e={contents:[O(t)]},t.systemInstruction&&(e.systemInstruction=P(t.systemInstruction)),e}function gt(t){return typeof t=="string"||Array.isArray(t)?{content:O(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Ct={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function _t(t){let e=!1;for(const n of t){const{role:s,parts:o}=n;if(!e&&s!=="user")throw new l(`First content should be with role 'user', got ${s}`);if(!w.includes(s))throw new l(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(w)}`);if(!Array.isArray(o))throw new l("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new l("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const u of $)u in r&&(i[u]+=1);const a=Ct[s];for(const r of $)if(!a.includes(r)&&i[r]>0)throw new l(`Content with role '${s}' can't contain '${r}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="SILENT_ERROR";class Rt{constructor(e,n,s,o){this.model=n,this.params=s,this.requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,s!=null&&s.history&&(_t(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var n,s,o,i,a,r;await this._sendPromise;const u=O(e),h={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,u]};let E;return this._sendPromise=this._sendPromise.then(()=>k(this._apiKey,this.model,h,this.requestOptions)).then(d=>{var c;if(d.response.candidates&&d.response.candidates.length>0){this._history.push(u);const f=Object.assign({parts:[],role:"model"},(c=d.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(f)}else{const f=g(d.response);f&&console.warn(`sendMessage() was unsuccessful. ${f}. Inspect response object for details.`)}E=d}),await this._sendPromise,E}async sendMessageStream(e){var n,s,o,i,a,r;await this._sendPromise;const u=O(e),h={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,u]},E=q(this._apiKey,this.model,h,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>E).catch(d=>{throw new Error(K)}).then(d=>d.response).then(d=>{if(d.candidates&&d.candidates.length>0){this._history.push(u);const c=Object.assign({},d.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=g(d);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(d=>{d.message!==K&&console.error(d)}),E}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(t,e,n,s){return(await I(e,_.COUNT_TOKENS,t,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e,n,s){return(await I(e,_.EMBED_CONTENT,t,!1,JSON.stringify(n),s)).json()}async function Ot(t,e,n,s){const o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await I(e,_.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,n,s){this.apiKey=e,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=P(n.systemInstruction),this.cachedContent=n.cachedContent,this.requestOptions=s||{}}async generateContent(e){var n;const s=F(e);return k(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},s),this.requestOptions)}async generateContentStream(e){var n;const s=F(e);return q(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},s),this.requestOptions)}startChat(e){var n;return new Rt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this.requestOptions)}async countTokens(e){const n=Et(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent});return pt(this.apiKey,this.model,n,this.requestOptions)}async embedContent(e){const n=gt(e);return vt(this.apiKey,this.model,n,this.requestOptions)}async batchEmbedContents(e){return Ot(this.apiKey,this.model,e,this.requestOptions)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new l("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new B(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n){if(!e.name)throw new C("Cached content must contain a `name` field.");if(!e.model)throw new C("Cached content must contain a `model` field.");const s={model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e};return new B(this.apiKey,s,n)}}export{It as G,b as H,M as a};
