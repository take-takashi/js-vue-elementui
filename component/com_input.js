(function() {
	Vue.component('com_input', {
		props: {
			args: {
				type: Object,
				default: {
					type: "text",
					name: "",
					label: "",
					maxlength: 10,
				}
			}
		},
		data: function(){
			return {
				name: "",
				value: ""
			}
		},
		methods: {
			onGetValue: function() {
				return this.value;
			}
		},
		created: function(){
			// 外部から参照可能なnameにargs.nameを格納
			this.name = this.args.name;
		},
		template: `
			<template>
				<span>
					<span v-if="args.type == 'text'">
						<el-input :name="args.name" v-model="value" :maxlength="args.maxlength"></el-input>
					</span>
					
					<span v-if="args.type == 'password'">
						<el-input :name="args.name" v-model="value" show-password="false" :maxlength="args.maxlength"></el-input>
					</span>
					
					<span v-if="args.type == 'date'">
						<el-date-picker :name="args.name" type="date" v-model="value" ></el-date-picker>
					</span>
					
					<span v-if="args.type == 'daterange'">
						<el-date-picker :name="args.name" type="daterange" v-model="value" ></el-date-picker>
					</span>
				</span>
			</template>
		`
	});
})();