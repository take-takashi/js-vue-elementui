(function(){
	Vue.component('page_login', {
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
		mounted: function(){
			//console.log(this.$options._componentTag, 'mounted');
		},
		methods: {
			onClick: onClick,
		},
		template: `
			<el-card>
				<div slot="header" class="clearfix">
					<span>ログインフォーム</span>
					<el-button style="float: right; padding: 3px 0" type="text">パスワードを忘れた場合</el-button>
				</div>
				
				<el-form label-width="11em">
					<el-form-item v-for="spec in specs" :label="spec.label">
						<com_input :args="spec" ref="forms"></com_input>
					</el-form-item>
					
					<el-form-item>
						<el-button type="primary" native-type="submit" @click.prevent="onClick">ログイン</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		`
	});
	
	function onClick(event){
		//console.log(this.$options._componentTag, event.type);
		var self = this;
		
		var forms = self.$refs.forms;
		var data = new FormData();
		for(var i = 0; i < forms.length; i++){
			//console.log(forms[i].name, forms[i].value);
			data.append(forms[i].name, forms[i].value);
		}
	}
})();