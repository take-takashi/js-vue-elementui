(function() {
	Vue.component('com-input', {
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
						<span>{{ args.label }}</span>
						<el-input :name="args.name" v-model="value" :maxlength="args.maxlength"></el-input>
					</span>
					
					<span v-if="args.type == 'date'">
						<span>{{ args.label }}</span>
						<el-date-picker :name="args.name" type="date" v-model="value" ></el-date-picker>
					</span>
					
					<span v-if="args.type == 'daterange'">
						<span>{{ args.label }}</span>
						<el-date-picker :name="args.name" type="daterange" v-model="value" ></el-date-picker>
					</span>
				</span>
			</template>
		`
	});
})();