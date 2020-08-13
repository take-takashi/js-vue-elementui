(function(){
	Vue.component('page_test_input', {
		props: {
			specs: {
				type: Array,
				default: [
					{ name: "company_id", label: "企業ID", type: "text" },
					{ name: "password", label: "パスワード", type: "password" },
					{ name: "report_datetime", label: "日付", type: "date"},
					{ name: "daterange", label: "FromTo", type: "daterange"},
				]
			}
		},
		data: function() {
			return {
				form: {
					name: ''
				},
			}
		},
		mounted: function(){
			//console.log(this.$options._componentTag, 'mounted');
		},
		methods: {
			onClick: onClick,
		},
		template: `
			<div>
				<el-form>
					<el-form-item>
						<el-row>
							<el-col :sm="2">
								<span>テスト</span>
							</el-col>
							<el-col :sm="22">
								<el-input v-model="form.name"></el-input>
							</el-col>
						</el-row>
					</el-form-item>
					
					<el-form-item>
						<el-button type="primary" @click="onClick">送信</el-button>
					</el-form-item>
				</el-form>
			</div>
		`
	});
	
	function onClick(event){
		//console.log(this.$options._componentTag, event.type);
		var self = this;
	}
})();