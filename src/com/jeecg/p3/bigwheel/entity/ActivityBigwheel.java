package com.jeecg.p3.bigwheel.entity;

import java.util.Date;
import java.math.BigDecimal;

import org.jeecgframework.p3.core.utils.persistence.Entity;

/**
 * 描述：</b>ActivityBigwheel:<br>
 * @author chao.hua
 * @since：2017年08月02日 16时20分33秒 星期三 
 * @version:1.0
 */
public class ActivityBigwheel implements Entity<Integer> {
	private static final long serialVersionUID = 1L;
	
	
	private String isBuy;
0为正常
	private Date creatDate;
	
	private Double everydayprob;
	
	public Date getCreatDate() {
		return creatDate;
	}
	public void setCreatDate(Date creatDate) {
		this.creatDate = creatDate;
	}
	private String extendOperation;
		return extendOperation;
	}
	public void setExtendOperation(String extendOperation) {
		this.extendOperation = extendOperation;
	}
	private Integer awardsendtype;
	public String getIspublish() {
		return ispublish;
	}
	public void setIspublish(String ispublish) {
		this.ispublish = ispublish;
	}
	public String getIsBuy() {
		return isBuy;
	}
	public void setIsBuy(String isBuy) {
		this.isBuy = isBuy;
	}
	public Double getEverydayprob() {
		return everydayprob;
	}
	public void setEverydayprob(Double everydayprob) {
		this.everydayprob = everydayprob;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
