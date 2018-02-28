package com.jeecg.p3.houseactivity.entity;

import java.util.Date;
import java.math.BigDecimal;
import org.jeecgframework.p3.core.utils.persistence.Entity;

/**
 * 描述：</b>Houseactivity:房屋转让团购抵押表<br>
 * @author chao.hua
 * @since：2017年11月11日 14时16分48秒 星期六 
 * @version:1.0
 */
public class Houseactivity implements Entity<String> {
	private static final long serialVersionUID = 1L;
	
	
	private Integer viewcount;
	private String status;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Integer getViewcount() {
		return viewcount;
	}
	public void setViewcount(Integer viewcount) {
		this.viewcount = viewcount;
	}
}
