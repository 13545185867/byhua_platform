package com.jeecg.p3.userinfo.entity;

import java.util.Date;
import java.math.BigDecimal;
import org.jeecgframework.p3.core.utils.persistence.Entity;

/**
 * 描述：</b>Userinfo:<br>
 * @author chao.hua
 * @since：2017年09月11日 12时01分29秒 星期一 
 * @version:1.0
 */
public class Userinfo implements Entity<String> {
	private static final long serialVersionUID = 1L;
	
	public String getIskf() {
		return iskf;
	}
	public void setIskf(String iskf) {
		this.iskf = iskf;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	private String iskf;
	private String status;
}
